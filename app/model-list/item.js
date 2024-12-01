export default function Item({name, id, apiType, onSelect}) {   
   
    function lowerCaseName(name) {
        let newname = name.toLowerCase()        
        return newname;
    }

    return ( 
        <div className={`mx-4 py-1  max-w-screen-sm`} onClick={onSelect}>
            <div className="text-sm lowercase capitalize">{lowerCaseName(name)}</div>                            
        </div>
    );
}