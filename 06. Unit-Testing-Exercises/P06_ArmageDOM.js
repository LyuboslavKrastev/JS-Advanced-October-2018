describe('ArmageDOM tests', () => {
    let oldHtml;
    let htmlSelector;
    beforeEach('Initialize HTML', () => {
        document.body.innerHTML = 
        `<div id="target">
            <div class="nested target">
                <p>This is some text</p>
            </div>
            <div class="target">
                <p>Empty div</p>
            </div>
            <div class="inside">
                <span class="nested">Some more text</span>
                <span class="target">Some more text</span>
            </div>
        </div>`;
        htmlSelector = $('#target');
        oldHtml = htmlSelector.html();
    });
    it('Should not remove with an invalid selector', () => {
        oldHtml = $(htmlSelector).html();
        nuke(htmlSelector, 5);
        assert.equal(htmlSelector.html(), oldHtml);
    });

    it('Should not remove with duplicate selectors', () => {
        let selector1 = $('.nested');
        nuke(selector1, selector1);
        assert.equal(htmlSelector.html(), oldHtml);
    });

    it('Should not remove with two valid selectors', () => {
        let selector1 = $('.nested');
        let selector2 = $('.inside');
        nuke(selector1, selector2);
        assert.equal(htmlSelector.html(), oldHtml);
    });

    it('Should remove with valid selectors', () => {
        let selector1 = $('.nested');
        let selector2 = $('.target');
        nuke(selector1, selector2);
        assert.notEqual(htmlSelector.html(), oldHtml);
    });
});