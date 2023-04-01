export class AppError extends Error {
     
    statusCode: number
    
    constructor(message: string, statusCode: number = 402){
        super()
        this.message = message
        this.statusCode = statusCode
    }
}