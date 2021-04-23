const expect = require("chai").expect;
import {URLs, labels} from "../../expected/urls";
import PracticeForm from "../pageobjects/practiceForm";
describe('Validate Forms section', () => {
    it("Click on Forms tile and validate the target URL", () => {
        browser.url("https://demoqa.com/");
        const element = $$(".category-cards > div")[1];
        element.click();
        const actualURL = browser.getUrl();
        expect(actualURL).to.equal(URLs.forms);
    });
    it('Validate the URL of Practice Form element', () => {
        const elements = $$('.accordion > .element-group')[1];
        const practiceForm = elements.$$('div > ul > li')[0];
        practiceForm.click();
        
    });
    it('Navigate to Practice Form page and check the header text', () => {
        browser.url(URLs.practiceForm);
        const header = $(".main-header");
        expect(header.getText()).to.equal(labels.practiceForm);
    });
    it('Validate the labels in Practice Form area', () =>{
        expect(PracticeForm.labelName).to.equal(labels.practiceFormLabels.name);
        expect(PracticeForm.labelEmail).to.equal(labels.practiceFormLabels.email);
        expect(PracticeForm.labelGender).to.equal(labels.practiceFormLabels.gender);
        expect(PracticeForm.labelMobile).to.equal(labels.practiceFormLabels.mobile);
        expect(PracticeForm.labelDateOfBirth).to.equal(labels.practiceFormLabels.dateOfBirth);
        expect(PracticeForm.labelSubjects).to.equal(labels.practiceFormLabels.subjects);
        expect(PracticeForm.labelHobbies).to.equal(labels.practiceFormLabels.hobbies);
        expect(PracticeForm.labelPicture).to.equal(labels.practiceFormLabels.picture);
        expect(PracticeForm.labelCurrentAddress).to.equal(labels.practiceFormLabels.currentAddress);
        expect(PracticeForm.labelStateAndCity).to.equal(labels.practiceFormLabels.stateAndCity);
    });
});