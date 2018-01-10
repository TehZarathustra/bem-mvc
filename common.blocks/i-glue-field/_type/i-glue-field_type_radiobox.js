BEM.DOM.decl({ block: 'i-glue-field_type_radiobox', baseBlock: 'i-glue-field' }, {
    onSetMod: {
        js: function() {
            this.__base();
            this.radiobox = this.findBlockOn('radiobox');
        }
    },

    init: function() {
        this.__base.apply(this, arguments);

        this.radiobox.on('change', function() {
            this.model.set(this.name, this.radiobox.val());
        }, this);
    },

    set: function(value) {
        this.__base();
        this.radiobox.val(value);
    },

    onFieldChange: function(e, data) {
        this.radiobox.getMod('focused') !== 'yes' && this.radiobox.val(data.value);
    }
});
