function solve(workerObj){
    if(!workerObj.handsShaking){
        return Object.create(workerObj);
    }

    const newWorker = Object.create(workerObj)
    newWorker.bloodAlcoholLevel += 0.1 * newWorker.weight * newWorker.experience ;
    newWorker.handsShaking = false;

    return newWorker;
}