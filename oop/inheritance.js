class ParenCompany{
    constructor(){
        this.Name = 'BBk Electronics';
    }
}

class ChildCompany extends ParenCompany{
    constructor(brand, model, cpu){
        super();
        this.Brand = brand;
        this.Model = model;
        this.Cpu = cpu;
    }

    phoneDetail(){
        console.log('Parent Company: ', this.Name);
        console.log('Brand: ', this.Brand);
        console.log('Model: ', this.Model);
        console.log('Processor: ', this.Cpu);
        console.log();
    }
}

const myPhone = new ChildCompany('Oneplus', '7T', 'SD 855+');
const hasibPhone = new ChildCompany('Vivo', 'V20', 'SD 732g');

myPhone.phoneDetail();
hasibPhone.phoneDetail();