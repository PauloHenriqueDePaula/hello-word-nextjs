import type {NextApiRequest, NextApiResponse} from 'next';

export default (req: NextApiRequest, res: NextApiResponse) =>{
    res.status(200).json({data: moment().format('DD/MM/YYYy HH:mm:ss')});
}
// Para adicionar dependência de modo a instá-la usando o NPM é "NPM I _____(nome da biblioteca)"
//Para excluir a dependência com todos os arquivos relacionados de modo automático é "NPM UN _______"