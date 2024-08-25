class RailwayForm{
    submit(){
        console.log(this.name + ": Form is submitted for " + this.trainNo);
    }
    cancel(){
        console.log(this.name +": Application is cancelled for " + this.trainNo);
    }
    fill = (name, trainNo) => {
        this.name = name;
        this.trainNo = trainNo;
        this.submit();
    }
}

let form1 = new RailwayForm();
form1.fill("Ashin", 45651);

let form2 = new RailwayForm();
form2.fill("Alan", 847612);
form2.cancel();