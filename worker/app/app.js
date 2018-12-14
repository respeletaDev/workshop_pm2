
var app = {
    start: async function () {


        try {

            await console.log('--------------------------------------------------------------------');
            await console.log('--Start Batch -', new Date());

            /*Iterate*/
            for (var i = 0; i < 50; i++) {
                await console.log('Print number',i);
            }

        } catch (e) {
            console.error(e);
        }

        await console.log('--End Batch -', new Date());
        await console.log('--------------------------------------------------------------------');
        //Recursive call
        app.start();
    }
};

module.exports = app;
