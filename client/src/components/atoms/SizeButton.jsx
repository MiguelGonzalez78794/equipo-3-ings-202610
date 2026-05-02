import Button from "./Button"


export default function SizeButton(){
    function toggleTxtSize(action){
        const current = parseFloat(getComputedStyle(document.documentElement)
                .getPropertyValue('--font-size-base'));

        const next = action === "increase" ? Math.min(current + 2, 24): Math.max(current - 2, 12);

        document.documentElement.style.setProperty("--font-size-base", "${next}px");
    }

    return(
        <div>
            <Button 
                text="A-"
                onClick={() => toggleTxtSize("decrease")}
                variant="secondary"
            />
            <Button 
                text="A+"
                onClick={() => toggleTxtSize("increase")}
                variant="secondary"
            />
        </div>
    )
}