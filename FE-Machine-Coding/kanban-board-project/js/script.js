class KanbanBoard {
    constructor() {
       this.toolboxContainer = document.querySelector('.toolbox-cont');
       this.modal = document.querySelector('.modal-overlay');
       this.closeBtn = document.querySelector('.modal-close-btn');
       this.textArea = document.querySelector('.modal-textarea');
       this.addCardBtn = document.querySelector('.add-card');
       this.mainCont = document.querySelector('.main-cont');

       this.addModal = true;
       this.modalPriorityColor = 'red';
       this.taskArr = [];

       this.bindEvents();
    }

    bindEvents() {
        this.toolboxContainer.addEventListener('click', this.handleTooboxClick.bind(this));
        this.closeBtn.addEventListener('click', this.closeModal.bind(this));
        this.addCardBtn.addEventListener('click', this.handleAddCardClick.bind(this));
    }

    handleTooboxClick(event){
       const targetClassList = event.target.classList;

       if(targetClassList.contains('fa-plus')) {
         this.toggleModal();
       } else if(targetClassList.contains('fa-trash')){
        console.log('trash icon has been cliked');
       }
    }

    toggleModal() {
        this.modal.style.display = this.addModal ? 'flex' : 'none';
        this.addModal = !this.addModal;
    }

    closeModal() {
      //console.log(this);
      this.toggleModal();
    }

    handleAddCardClick() {
        const task = this.textArea.value.trim();

        if(task.length){
            this.createTicket(task);
        }
    }

    createTicket(task) {
        const id = new ShortUniqueId().randomUUID();
        const ticketCont = this.createTicketElement(task, id, this.modalPriorityColor);
        this.mainCont.appendChild(ticketCont);
        this.toggleModal();
        this.textArea.value = '';
        this.taskArr.push({id, task, color:this.modalPriorityColor});
        //console.log(this.taskArr);
        this.updateLocalStorage();
    }

    createTicketElement(task, id, priorityColor){
        const ticketCont = document.createElement('div');
        ticketCont.className = 'ticket-cont';

        ticketCont.innerHTML = `
            <div class="ticket-color ${priorityColor}"></div>
            <div class="ticket-id">${id}</div>
            <div class="ticket-task">${task}</div>
            <div class="lock-unlock">
                <i class="fa-solid fa-lock"></i>
            </div>
        `
        return ticketCont;
    }

    updateLocalStorage(){
        const strArr = JSON.stringify(this.taskArr);
        localStorage.setItem('tickets',strArr);
    }

}

new KanbanBoard();