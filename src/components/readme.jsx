{filteredData.length != 0 && (
    <containerResultSearch className="data-result" >
        { filteredData.slice(0,5).map((value,key)=>{
            return(
                <a href="">
                    {value.name.toLowerCase()}
                </a>
            )
        })}
    </containerResultSearch>
)}