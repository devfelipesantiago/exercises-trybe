const uppercase = (str, callback) => {
    callback(str.toUpperCase());
};

it('Deveria retorna letras maiúsculas', (done) => {
    uppercase('test', str => {
        expect(str).toBe('TEST');
        done();
    });
});