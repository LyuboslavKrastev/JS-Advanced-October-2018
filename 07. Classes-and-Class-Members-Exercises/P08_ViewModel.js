class TextBox{
    constructor(selector, regex) {
        /*  The constructor takes as parameters a selector and a regex for invalid symbols.  */
        this._value = null;
        this._elements = $(selector);
        this.value = $(this.elements[0]).val();
        this._invalidSymbols = regex;

        this.onInput();
    }

    get value(){
        return this._value;
    }
    set value(val){
        this._value = val;
        for (const el of this.elements) {
            $(el).val(val);
        }
    }

    get elements(){
        return this._elements;
    }

    isValid(){
        if(this._invalidSymbols.test(this.value)){
            return false;
        }
        return true;
    }
    
    onInput(){
        let that = this;
        this.elements.on('input', function(){
            let text = $(this).val();
            that.value = text;  
        });
    }
}

let textbox = new TextBox(".textbox",/[^a-zA-Z0-9]/);

