const templateSSR=(title = "ziko app", lang = "en")=>`
<!DOCTYPE html>
<html lang=${lang} data-engine="ziko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
    body,html{
      margin:0,
      padding:0
    }
    </style>
    <script src="index.js"></script>
</head>
<body>
    
</body>
</html
`
export{
    templateSSR
}