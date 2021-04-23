class PracticeForm {
    get labelName(){
        return $('#userName-label').getText();
    }
    get labelEmail(){
        return $('#userEmail-label').getText();
    }
    get labelGender(){
        return $('#genterWrapper > div.col-md-3.col-sm-12').getText();
    }
    get labelMobile(){
        return $('#userNumber-label').getText();
    }
    get labelDateOfBirth(){
        return $('#dateOfBirth-label').getText();
    }
    get labelSubjects(){
        return $('#subjectsWrapper #subjects-label').getText();
    }
    get labelHobbies(){
        return $('#hobbiesWrapper #subjects-label').getText();
    }
    get labelPicture(){
        return $('.row:nth-child(8) #subjects-label').getText();
    }
    get labelCurrentAddress(){
        return $('#currentAddress-label').getText();
    }
    get labelStateAndCity(){
        return $('#stateCity-label').getText();
    }
}
export default new PracticeForm();
  
