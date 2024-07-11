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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Healthy' });
});
app.put('/judge0', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const submissionTokens = [body];
        const firstToken = submissionTokens[0].token;
        console.log(firstToken);
        const submission = yield db_1.db.submissions.findFirst({
            where: {
                //@ts-ignore
                judge0Token: firstToken
            }
        });
        console.log(submission);
        for (const sub of submissionTokens) {
            if (sub.status.id !== 3) {
                yield db_1.db.submissions.update({
                    where: {
                        //@ts-ignore
                        id: submission.id
                    },
                    data: {
                        status: 'REJECTED'
                    },
                });
                return res.status(200).json({});
            }
        }
        yield db_1.db.submissions.update({
            where: {
                //@ts-ignore
                id: submission.id
            },
            //@ts-ignore
            data: {
                status: 'ACCEPTED'
            }
        });
        return res.status(200).json({});
    }
    catch (error) {
        console.error('Error updating submission status:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}));
app.listen(3005, () => {
    console.log('App started on port: 3005');
});
