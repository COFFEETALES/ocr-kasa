
cd C:\dev\ocr\ocr-kasa\src
Get-ChildItem -LiteralPath . -Recurse -Include ('*.png', '*.jpg', '*.jpeg') | % {
  $TargetName = (
   [Text.RegularExpressions.Regex]::Replace(
    $_.FullName,
    '\.[^.]+$',
    '',
    [Text.RegularExpressions.RegexOptions]::CultureInvariant
   )
  )

  [Uint32]$Width = $NULL
  [Bool]$RetVal = (
    [Uint32]::TryParse(
      (& magick identify -format '%w' ($_.FullName)),
      [Globalization.NumberStyles]::Integer,
      [CultureInfo]::InvariantCulture,
      [Ref]$Width
    )
  )

  & cwebp -q 80 ($_.FullName) -o ($TargetName, '.max.webp' -join '')
  & cwebp -q 80 ($_.FullName) -resize ([Math]::Round($Width * 0.8)) 0 -o ($TargetName, '.med.webp' -join '')
  & cwebp -q 80 ($_.FullName) -resize ([Math]::Round($Width * 0.6)) 0 -o ($TargetName, '.low.webp' -join '')
}
