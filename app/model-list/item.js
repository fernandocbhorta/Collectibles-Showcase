export default function Item({name, id, apiType, onSelect}) {   
   
    // this function converts the name of the item to lowercase, so then it can be capitalized on the screen
    // most of the items are in uppercase, so this function is necessary to make the list look better
    function lowerCaseName(name) {
        let newname = name.toLowerCase()        
        return newname;
    }

    return ( 
        <div className={`mx-4 py-1  max-w-screen-sm`} onClick={onSelect}>
            <div className="text-sm lowercase capitalize cursor-pointer">{lowerCaseName(name)}</div>                            
        </div>
    );
}