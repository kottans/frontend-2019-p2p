class AppState {
    constructor(){
        this.watchers={}
    }
    watch(entity, watcher){
        if(this.watchers[entity]){
            this.watchers[entity].push(watcher);
        } else {
            this.watchers[entity] = [watcher];
        }
    }
    update(entity, newValue){
        this.watchers[entity]&&this.watchers[entity].forEach(watcher => watcher(newValue));
    }
}

export default new AppState();