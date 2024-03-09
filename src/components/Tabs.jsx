// In here we managed to do a Tabs component that can handle Tabs with buttons
// Not just once but multi use it as a indisposable component
// We achieved it by multi slotting the components and setting a default value 
// <Wrapper> is not actually a normal component

export default function Tabs({children, buttons, Wrapper = "menu"}){

    return(<>

        <Wrapper>{buttons}</Wrapper>
        {children}
        </>
    )
}