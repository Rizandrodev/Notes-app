export const validateEmail = (email) => { // Corrigido nome para padrão PascalCase -> camelCase
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitials = (name) => {
    if (!name) return "";

    // Dividindo o nome em palavras
    const words = name.trim().split(" ");
    
    // Pegando a inicial das duas primeiras palavras (se houver)
    let initials = words.slice(0, 2).map(word => word[0]).join("");

    return initials.toUpperCase(); // Deixa em maiúsculas
};
