# API設計

## 対戦開始
対戦を登録

POST / api / games

## 現在の盤面を表示する
GET / api/ games / latest / turns / {turnCount}

## こまを動かす
POST / api / games / latest / turns

## ゲーム結果を確認する
GET / api / games / {game_id} / result

## ステージを表示する
GET / api / games / stage / {stage_id} 

## ステージを選択する
POST / api / games / stage

