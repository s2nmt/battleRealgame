from PIL import Image, ImageDraw, ImageFont
import os
import subprocess

root = os.path.normpath(os.path.join(os.path.dirname(__file__), '..'))
path = os.path.join(root, 'public', 'logo-wordmark.png')

subprocess.run(
    ['git', 'checkout', 'HEAD', '--', 'public/logo-wordmark.png'],
    cwd=root,
    check=True,
)

im = Image.open(path).convert('RGBA')
ow, oh = im.size
pixels = im.load()


def row_has_content(y, min_alpha=40):
    return any(pixels[x, y][3] >= min_alpha for x in range(0, ow, 2))


content_rows = [y for y in range(oh) if row_has_content(y)]
gaps = []
in_gap = False
start = None
for y in range(content_rows[0], content_rows[-1] + 1):
    empty = not row_has_content(y)
    if empty and not in_gap:
        in_gap = True
        start = y
    elif not empty and in_gap:
        in_gap = False
        gaps.append((start, y - 1))

clear_from = gaps[-1][0]
slogan_start = gaps[-1][1] + 1

sample_cols = []
for y in range(slogan_start, min(slogan_start + 40, oh)):
    for x in range(0, ow, 4):
        r, g, b, a = pixels[x, y]
        if a > 200 and (r + g + b) > 180:
            sample_cols.append((r, g, b))
color = (
    (
        sum(c[0] for c in sample_cols) // len(sample_cols),
        sum(c[1] for c in sample_cols) // len(sample_cols),
        sum(c[2] for c in sample_cols) // len(sample_cols),
        255,
    )
    if sample_cols
    else (141, 168, 196, 255)
)

# Previous ~95; +2 sizes => 111
chosen = 111
gap_above = 56
bottom_pad = 30

font_path = next(
    (
        p
        for p in (
            r'C:\Windows\Fonts\segoeuib.ttf',
            r'C:\Windows\Fonts\arialbd.ttf',
            r'C:\Windows\Fonts\segoeui.ttf',
            r'C:\Windows\Fonts\arial.ttf',
        )
        if os.path.exists(p)
    ),
    None,
)
text = 'Thế giới đồ chơi công nghệ'
probe = ImageDraw.Draw(Image.new('RGBA', (1, 1)))
font = ImageFont.truetype(font_path, chosen)
bbox = probe.textbbox((0, 0), text, font=font)
tw = bbox[2] - bbox[0]
th = bbox[3] - bbox[1]

# Widen canvas if slogan needs more horizontal room than original
side_pad = 24
need_w = tw + side_pad * 2
new_w = max(ow, need_w)
ox = (new_w - ow) // 2

new_h = clear_from + gap_above + th + bottom_pad
canvas = Image.new('RGBA', (new_w, new_h), (0, 0, 0, 0))
canvas.paste(im.crop((0, 0, ow, clear_from)), (ox, 0))

draw = ImageDraw.Draw(canvas)
x = int(new_w / 2 - tw / 2 - bbox[0])
y = clear_from + gap_above - bbox[1]
draw.text((x, y), text, font=font, fill=color)
canvas.save(path, 'PNG')
print('font', chosen, 'tw', tw, 'th', th, 'gap', gap_above, 'size', canvas.size)
