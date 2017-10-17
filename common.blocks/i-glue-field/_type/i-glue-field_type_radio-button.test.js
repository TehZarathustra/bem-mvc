BEM.TEST.decl('i-glue-field_type_radio-button', function() {
    if (!BEM.blocks['radio-button']) return;

    BEM.MODEL.decl('glue-field-radio-button-model', {
        num: 'number',
        str: 'string'
    });

    describe('glue field type radio-button', function() {

        BEM.DOM.decl('b-glued-field', {
            onSetMod: {
                js: function() {
                }
            }
        });

        var model;
        afterEach(function() {
            $('.b-glued-field').remove();
            model.destruct();
        });

        it('should glue field', function() {
            model = BEM.MODEL.create('glue-field-radio-button-model', {
                num: 1,
                str: 's'
            });

            BEM.DOM.append('body', BEMHTML.apply({
                block: 'b-glued-field',
                mix: [{
                    block: 'i-glue',
                    js: {
                        modelName: 'glue-field-radio-button-model',
                        modelId: model.id
                    }
                }],
                js: true,
                content: [
                    {
                        block: 'radio-button',
                        mix: [{
                            block: 'i-glue',
                            elem: 'model-field',
                            js: {
                                name: 'str',
                                type: 'radio-button'
                            }
                        }],
                        name: 'title',
                        value: '',
                        mods: { size: 'm', theme: 'normal' },
                        content: [
                            {
                                elem: 'radio',
                                controlAttrs: {value: 'all'},
                                content: 'виден всем'
                            },
                            {
                                elem: 'radio',
                                controlAttrs: {value: 'friends'},
                                content: 'только друзьям'
                            }
                        ]
                    }
                ]
            }));

            var block = $('.b-glued-field').bem('b-glued-field'),
                radioButton = block.findBlockInside('radio-button');

            model.set('str', 'all');
            expect(radioButton.val()).toEqual('all');

            radioButton.val('friends');
            expect(model.get('str')).toEqual('friends');
        });


    });

});
