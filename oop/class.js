class Mobile{
    constructor(mBrand, mModel, mRam, mCpu){
        this.Brand = mBrand;
        this.Model = mModel;
        this.Cpu = mCpu;
        this.Ram = mRam;
        // console.log(this.Brand);
        // console.log(this.Model);
        // console.log(this.Cpu);
        // console.log(this.Ram);
        // console.log();
        // this.display(this.Brand, this.Model, this.Cpu, this.Ram);
    }
    
    spec(){
        console.log(this.Brand);
        console.log(this.Model);
        console.log(this.Cpu);
        console.log(this.Ram);
        console.log();
    }
}

const myMobile = new Mobile('Oneplus', '7T', 'SD855+', '8Gb');
const mahfuz = new Mobile('Oneplus', '8', 'Sd865', '8Gb');

myMobile.spec();