BEM.DOM.decl({ block: 'i-glue-field_type_radiobutton', baseBlock: 'i-glue-field' }, {
    onSetMod: {
        js: function() {
            this.__base();
            this.radiobutton = this.findBlockOn('radio-button');
        }
    },

    init: function() {
        this.__base.apply(this, arguments);

        this.radiobutton.on('change', function() {
            this.model.set(this.name, this.radiobutton.val());
        }, this);
    },

    set: function(value) {
        this.__base();
        this.radiobutton.val(value);
    },

    onFieldChange: function(e, data) {
        this.radiobutton.getMod('focused') !== 'yes' && this.radiobutton.val(data.value);
    }
});
