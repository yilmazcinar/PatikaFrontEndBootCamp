// To-Do List Uygulaması JavaScript

class TodoApp {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.bindEvents();
        this.renderTasks();
        this.updateCounts();
    }

    bindEvents() {
        // Görev ekleme
        document.getElementById('addTaskBtn').addEventListener('click', () => this.addTask());
        document.getElementById('taskInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        // Filtre butonları
        document.querySelectorAll('[data-filter]').forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });

        // Tamamlananları temizle
        document.getElementById('clearCompletedBtn').addEventListener('click', () => this.clearCompleted());
    }

    addTask() {
        const input = document.getElementById('taskInput');
        const text = input.value.trim();
        const errorMsg = document.getElementById('errorMessage');

        // Validasyon
        if (!text) {
            this.showError('Görev metni boş olamaz!');
            return;
        }

        if (text.length > 100) {
            this.showError('Görev metni 100 karakterden uzun olamaz!');
            return;
        }

        // Aynı görev kontrolü
        if (this.tasks.some(task => task.text.toLowerCase() === text.toLowerCase())) {
            this.showError('Bu görev zaten mevcut!');
            return;
        }

        // Yeni görev oluştur
        const task = {
            id: Date.now().toString(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.tasks.unshift(task); // Yeni görevler en üste
        this.saveTasks();
        this.renderTasks();
        this.updateCounts();

        // Input'u temizle
        input.value = '';
        errorMsg.classList.remove('show');

        // Başarı animasyonu
        this.showSuccess();
    }

    deleteTask(id) {
        if (confirm('Bu görevi silmek istediğinizden emin misiniz?')) {
            this.tasks = this.tasks.filter(task => task.id !== id);
            this.saveTasks();
            this.renderTasks();
            this.updateCounts();
        }
    }

    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
            task.completedAt = task.completed ? new Date().toISOString() : null;
            this.saveTasks();
            this.renderTasks();
            this.updateCounts();
        }
    }

    editTask(id) {
        const taskElement = document.querySelector(`[data-id="${id}"]`);
        const textElement = taskElement.querySelector('.task-text');
        const editBtn = taskElement.querySelector('.edit-btn');
        
        if (taskElement.classList.contains('editing')) {
            // Düzenlemeyi kaydet
            const input = taskElement.querySelector('.edit-input');
            const newText = input.value.trim();
            
            if (!newText) {
                this.showError('Görev metni boş olamaz!');
                return;
            }

            if (newText.length > 100) {
                this.showError('Görev metni 100 karakterden uzun olamaz!');
                return;
            }

            // Aynı görev kontrolü (kendisi hariç)
            if (this.tasks.some(task => task.id !== id && task.text.toLowerCase() === newText.toLowerCase())) {
                this.showError('Bu görev zaten mevcut!');
                return;
            }

            const task = this.tasks.find(task => task.id === id);
            task.text = newText;
            task.updatedAt = new Date().toISOString();
            
            this.saveTasks();
            this.renderTasks();
            this.updateCounts();
        } else {
            // Düzenleme moduna geç
            taskElement.classList.add('editing');
            const input = taskElement.querySelector('.edit-input');
            input.value = textElement.textContent;
            input.focus();
            input.select();
            editBtn.innerHTML = '<i class="fas fa-check"></i>';
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Aktif butonu güncelle
        document.querySelectorAll('[data-filter]').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
        
        this.renderTasks();
    }

    clearCompleted() {
        const completedCount = this.tasks.filter(task => task.completed).length;
        
        if (completedCount === 0) {
            alert('Temizlenecek tamamlanmış görev bulunamadı!');
            return;
        }

        if (confirm(`${completedCount} tamamlanmış görevi silmek istediğinizden emin misiniz?`)) {
            this.tasks = this.tasks.filter(task => !task.completed);
            this.saveTasks();
            this.renderTasks();
            this.updateCounts();
        }
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }

    renderTasks() {
        const taskList = document.getElementById('taskList');
        const emptyMessage = document.getElementById('emptyMessage');
        const filteredTasks = this.getFilteredTasks();

        if (filteredTasks.length === 0) {
            taskList.innerHTML = '';
            emptyMessage.style.display = 'block';
            return;
        }

        emptyMessage.style.display = 'none';
        
        taskList.innerHTML = filteredTasks.map(task => `
            <li class="list-group-item task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
                <div class="task-content">
                    <div class="task-left">
                        <input type="checkbox" class="form-check-input task-checkbox" 
                               ${task.completed ? 'checked' : ''} 
                               onchange="todoApp.toggleTask('${task.id}')">
                        <span class="task-text">${this.escapeHtml(task.text)}</span>
                        <input type="text" class="form-control edit-input" value="${this.escapeHtml(task.text)}">
                    </div>
                    <div class="task-actions">
                        <button class="task-btn edit-btn" onclick="todoApp.editTask('${task.id}')">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="task-btn delete-btn" onclick="todoApp.deleteTask('${task.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </li>
        `).join('');
    }

    updateCounts() {
        const allCount = this.tasks.length;
        const activeCount = this.tasks.filter(task => !task.completed).length;
        const completedCount = this.tasks.filter(task => task.completed).length;

        document.getElementById('allCount').textContent = allCount;
        document.getElementById('activeCount').textContent = activeCount;
        document.getElementById('completedCount').textContent = completedCount;

        // Temizleme butonunu göster/gizle
        const clearBtn = document.getElementById('clearCompletedBtn');
        clearBtn.style.display = completedCount > 0 ? 'block' : 'none';
    }

    saveTasks() {
        localStorage.setItem('todoTasks', JSON.stringify(this.tasks));
    }

    showError(message) {
        const errorMsg = document.getElementById('errorMessage');
        errorMsg.textContent = message;
        errorMsg.classList.add('show');
        
        setTimeout(() => {
            errorMsg.classList.remove('show');
        }, 3000);
    }

    showSuccess() {
        const input = document.getElementById('taskInput');
        const originalBg = input.style.backgroundColor;
        
        input.style.backgroundColor = '#d4edda';
        input.style.borderColor = '#28a745';
        
        setTimeout(() => {
            input.style.backgroundColor = originalBg;
            input.style.borderColor = '';
        }, 500);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Gelişmiş özellikler
    exportTasks() {
        const dataStr = JSON.stringify(this.tasks, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'todo-tasks.json';
        link.click();
        
        URL.revokeObjectURL(url);
    }

    importTasks(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedTasks = JSON.parse(e.target.result);
                if (Array.isArray(importedTasks)) {
                    this.tasks = importedTasks;
                    this.saveTasks();
                    this.renderTasks();
                    this.updateCounts();
                    alert('Görevler başarıyla içe aktarıldı!');
                }
            } catch (error) {
                alert('Geçersiz dosya formatı!');
            }
        };
        reader.readAsText(file);
    }

    getStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed).length;
        const active = total - completed;
        const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        return {
            total,
            completed,
            active,
            completionRate
        };
    }
}

// Uygulama başlatma
let todoApp;

document.addEventListener('DOMContentLoaded', () => {
    todoApp = new TodoApp();
});

// Klavye kısayolları
document.addEventListener('keydown', (e) => {
    // Ctrl + N: Yeni görev
    if (e.ctrlKey && e.key === 'n') {
        e.preventDefault();
        document.getElementById('taskInput').focus();
    }
    
    // Ctrl + A: Tümünü seç filtresi
    if (e.ctrlKey && e.key === 'a' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        todoApp.setFilter('all');
    }
    
    // Escape: Düzenleme modundan çık
    if (e.key === 'Escape') {
        document.querySelectorAll('.task-item.editing').forEach(item => {
            item.classList.remove('editing');
            item.querySelector('.edit-btn').innerHTML = '<i class="fas fa-edit"></i>';
        });
    }
});

// Sayfa yüklendiğinde input'a odaklan
window.addEventListener('load', () => {
    document.getElementById('taskInput').focus();
});

// Temizlik işlemi (sayfa kapatılırken)
window.addEventListener('beforeunload', () => {
    if (todoApp && todoApp.tasks.length > 0) {
        todoApp.saveTasks();
    }
});
