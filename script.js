//M O D A L 
const Modal = {
    open(){
        // Abrir modal

        // Adicionando a class active ao modal
            document
                .querySelector('.modal-overlay')
                .classList.add('active');

    },

    close () {
        // Fechar o modal

        // Remover a class active do modal
        document
        .querySelector('.modal-overlay')
        .classList.remove('active');
    } 
}