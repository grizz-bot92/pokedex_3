export type CacheEntry<T> = {
  createdAt: number,
  val: T,
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(
    public interval: number,
  ){
    this.#interval = interval;
    this.#startReapLoop();
  }


  add<T>(key: string, val: T){
    this.#cache.set(key, {
      createdAt: Date.now(),
      val
    });
  }

  get<T>(key: string): T | undefined{
    const entry = this.#cache.get(key);
    if(!entry){
      return undefined;
    }
    return entry.val;
  }

  #reap(){
    const cache = this.#cache;
    for(const [k, v] of cache){
      if(v.createdAt < (Date.now() - this.#interval)){
        this.#cache.delete(k);
      }
    }
  }

  #startReapLoop(){
   this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
  }

  stopReapLoop(){
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }
}