import path from "path";
import { TsrpcConfig } from '../../src/models/TsrpcConfig';

const tsrpcConf: TsrpcConfig = {
    proto: [
        {
            input: path.resolve(__dirname, '../protocols'),
            output: path.resolve(__dirname, '../output/proto/serviceProto.ts'),
            api: path.resolve(__dirname, '../api')
        },
        {
            input: path.resolve(__dirname, '../protocols'),
            ignore: path.resolve(__dirname, '../protocols/a/**'),
            output: path.resolve(__dirname, '../output/proto/serviceProto1.ts'),
            api: path.resolve(__dirname, '../api')
        }
    ],
    sync: [
        {
            from: path.resolve(__dirname, '../output/proto'),
            to: path.resolve(__dirname, '../output/sync/symlink'),
            type: 'symlink'
        },
        {
            from: path.resolve(__dirname, '../output/proto'),
            to: path.resolve(__dirname, '../output/sync/copy'),
            type: 'copy'
        }
    ],
    // verbose: true
}
export default tsrpcConf;