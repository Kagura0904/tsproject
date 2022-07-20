"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = new app_1.App(3000);
        yield app.listen();
    });
}
main();
// ======================================================　
// ||  ここからQiitaのソースコード                         || 
// ======================================================
// import express from 'express'
// const app: express.Express = express()
// // CORSの許可
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//     next()
// })
// // body-parserに基づいた着信リクエストの解析
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// // GetとPostのルーティング
// const router: express.Router = express.Router()
// router.get('/api/getTest', (req: express.Request, res: express.Response) => {
//     res.send(req.query)
// })
// router.post('/api/postTest', (req: express.Request, res: express.Response) => {
//     res.send(req.body)
// })
// app.use(router)
// // 3000番ポートでAPIサーバ起動
// app.listen(3000, () => { console.log('Example app listening on port 3000!') })
