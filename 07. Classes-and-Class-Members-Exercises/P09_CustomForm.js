let result = (function (){
    class Textbox{
        constructor(selector, regex) {
            /*  The constructor takes as parameters a selector and a regex for invalid symbols.  */
    
            this._elements = $(selector);
            this._value = $(this.elements[0]).val();
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
            this.elements.on('input', (event) => {
                let text = $(event.target).val();
                this.value = text;  
            });
        }
    }
    
    class Form{
        constructor(){
            this._element = $('<div>')
                .addClass('form');
            //The constructor should be able to take different amount of Textbox objects
            this.textboxes = arguments;
        }

        get textboxes(){
            return this._textboxes;
        }

        set textboxes(args){
            for (const arg of args) {
                if(!arg instanceof Textbox){
                    throw new Error('Invalid parameter');
                }
            }

            this._textboxes = args;
            for (const textbox of this.textboxes) {
                for (const el of textbox.elements) {
                    this._element.append($(el));
                }
            }
        }

        submit(){
            let isValid = true;

            for (const textbox of this.textboxes) {
                if(textbox.isValid()){
                    for (const el of textbox.elements) {
                        $(el).css('border', '2px solid green');
                    }
                } else{
                    for (const el of textbox.elements) {
                        $(el).css('border', '2px solid red');
                    }
                    allvalid = false;
                }
            }

            return isValid;
        }

        attach(selector){
            $(selector).append(this._element);
        }
    }

    return{
        Textbox: Textbox,
        Form: Form
    }
})();

