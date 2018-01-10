BEM.TEST.decl('i-glue-field_type_radiobox', function() {
    if (!BEM.blocks['radiobox']) return;

    BEM.MODEL.decl('glue-field-radiobox-model', {
        num: 'number',
        str: 'string'
    });

    describe('glue field type radiobox', function() {
        BEM.DOM.decl('b-glued-field');

        var model;

        afterEach(function() {
            $('.b-glued-field').remove();
            model.destruct();
        });

        it('should glue field', function() {
            model = BEM.MODEL.create('glue-field-radiobox-model', {
                num: 1,
                str: 's'
            });

            BEM.DOM.append('body', BEMHTML.apply({
                block: 'b-glued-field',
                mix: [{
                    block: 'i-glue',
                    js: {
                        modelName: 'glue-field-radiobox-model',
                        modelId: model.id
                    }
                }],
                js: true,
                content: [
                    {
                        block: 'radiobox',
                        mix: [{
                            block: 'i-glue',
                            elem: 'model-field',
                            js: {
                                name: 'str',
                                type: 'radiobox'
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
                radiobox = block.findBlockInside('radiobox');

            model.set('str', 'all');
            expect(radiobox.val()).toEqual('all');

            radiobox.val('friends');
            expect(model.get('str')).toEqual('friends');
        });

    });

});
