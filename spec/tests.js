describe('Should toString() test', function() {
    it('call the function getNumber()', function() {
        var sms = new Sms('0633942468', "changed");
        spyOn(sms, "getNumber");
        sms.toString();
        expect(sms.getNumber).toHaveBeenCalled();
    })

    it('call the function getText()', function() {
        var sms = new Sms("0633942468", "changed");
        spyOn(sms, "getText");
        sms.toString();
        expect(sms.getText).toHaveBeenCalledWith();
    })
})