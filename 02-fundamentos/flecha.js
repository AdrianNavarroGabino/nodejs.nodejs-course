{
    function sumar(a, b = 10) {
        return a + b;
    }
    console.log(sumar(5, 10));
    console.log(sumar(5));
}

{
    const sumar = (a, b = 10) => {
        return a + b;
    }
    console.log(sumar(5, 10));
    console.log(sumar(5));
}

{
    const sumar = (a, b = 10) => a + b;
    console.log(sumar(5, 10));
    console.log(sumar(5));
}

{
    const saludar = () => "Hola, mundo";
    console.log(saludar());
}