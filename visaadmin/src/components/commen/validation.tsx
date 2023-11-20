const Validation =(values: any) =>{

    let errors= {
        name:'',
        password:''
    }

    if(!values.name){
        errors.name ="Name Required"

    }else if(values.name.length<3){
        errors.name = "Minimum Length 3 Required"
    }

    if(!errors.password){
        errors.password="Password Required"
    }
    else if(values.password.length<8){
        errors.password = "minimum lenth 8 required"
    }
    return errors
}

export default Validation;