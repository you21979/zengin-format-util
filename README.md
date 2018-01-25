# zengin-format-util
japanese zengin format util

# ツール

bin以下に編集用簡易ツールを用意

## JSON形式に変換

```
./parse.js zengin_file
```

* decode.txtというJSONファイルを生成
* エラーのあった行数と直前のデータを表示するのでチェッカとして使える

## JSON形式から変換

```
./compile.js decode.txt
```

* encode.datというファイルを作成
* decode.txtを編集して全銀ファイルを作成する

## SJISからUTFへ変換

```
./fromjis.js zengin_file
```

* utf8fileというファイルを作成
* ファイルが壊れていた場合の修復など

## UTFからSJISへ変換

```
./tosjis.js utf8file
```

* sjisfileというファイルを作成
* ファイルが壊れていた場合の修復など

# JSON

```
{
  "1": [],
  "2": [],
  "8": [],
  "9": []
}
```

* 1にはヘッダが一つ入る
* 2にはデータが複数件数入る
* 8にはトレーラレコードが一つ入る
* 9にはフッダが一つ入る
* ファイルの細かい内容は全銀ファイルの仕様を参考のこと


