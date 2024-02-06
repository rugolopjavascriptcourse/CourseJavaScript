class Student {
    static readonly MS_EIGHTEEN_AGE=18*365*24*60*60*1000
    name: string
    email: string
    address: Address
    private _birthday: Date
    phone?: string

    constructor(name: string, email: string, address: Address, birthday: Date, phone?: string,){
        this.name = name
        this.email = email
        this.address = address
        this._birthday = birthday
        this.phone = phone
    }

    get birthday():Date {
        if(this.isYounger18()){
            throw Error('Es menor de edad')
        }
        return this._birthday
    }
    set birthday(born: Date){
        this._birthday = born
    }

    public getCoeficiente(num:number):number {
        return num*2
        
    }
    private getEficiencia():string{
        return "Eficiencia"
    }

    private isYounger18():boolean{
        let nowMS = new Date().getTime()
        let birthdayMS = this._birthday.getTime()

        return nowMS-birthdayMS<Student.MS_EIGHTEEN_AGE
    }

}
interface Address {
    street: string
    num: number
    city: string
}

