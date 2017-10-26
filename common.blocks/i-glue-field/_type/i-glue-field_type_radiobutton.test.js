BEM.TEST.decl('i-glue-field_type_radiobutton', function() {
    if (!BEM.blocks['radiobutton']) return;

    BEM.MODEL.decl('glue-field-radiobutton-model', {
        num: 'number',
        str: 'string'
    });

    describe('glue field type radiobutton', function() {

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
            model = BEM.MODEL.create('glue-field-radiobutton-model', {
                num: 1,
                str: 's'
            });

            BEM.DOM.append('body', BEMHTML.apply({
                block: 'b-glued-field',
                mix: [{
                    block: 'i-glue',
                    js: {
                        modelName: 'glue-field-radiobutton-model',
                        modelId: model.id
                    }
                }],
                js: true,
                content: [
                    {
                        block: 'radiobutton',
                        mix: [{
                            block: 'i-glue',
                            elem: 'model-field',
                            js: {
                                name: 'str',
                                type: 'radiobutton'
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
