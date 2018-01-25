# zengin-format-util
japanese zengin format util

# ツール

bin以下に編集用簡易ツールを用意

## JSON形式に変換

```
./parse.js zengin_file
```

* decode.txtというJSONファイルを生成

## JSON形式から変換

```
./compile.js decode.txt
```

* encode.datというファイルを作成

## SJISからUTFへ変換

```
./fromjis.js zengin_file
```

* utf8fileというファイルを作成

## UTFからSJISへ変換

```
./tosjis.js utf8file
```

* sjisfileというファイルを作成

