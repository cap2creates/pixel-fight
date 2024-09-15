function get_surrounding(pos,dimensions){
    let surrounding = []

    function get_y_level(pos){
        return (pos-(pos%dimensions[1]))/dimensions[1];
    }
    function get_x_level(pos){
        return pos%dimensions[0];
    }
    const ylevel = get_y_level(pos);
    const xlevel = get_x_level(pos);
    if(ylevel>0){
        surrounding.push(pos-dimensions[1]);
    }
    if(xlevel >= 0){
        surrounding.push(pos-1);
    }
    if(xlevel<dimensions[0] && xlevel>0){
        surrounding.push(pos+1);
    }
    if(ylevel<dimensions[1]){
        surrounding.push(pos+dimensions[1]);
    }
    return surrounding;
}