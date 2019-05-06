/**
 * An example of how classes normally work
 */
class NotASingleton {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }
}

const notSingleton1 = new NotASingleton();
const notSingleton2 = new NotASingleton();

console.log('Before incrementing:')
console.log('- notSingleton1.count:', notSingleton1.count); // => notSingleton1.count: 0
console.log('- notSingleton2.count:', notSingleton2.count); // => notSingleton2.count: 0
console.log('\n');

notSingleton1.increment();

console.log('After incrementing:')
console.log('- notSingleton1.count:', notSingleton1.count); // => notSingleton1.count: 1
console.log('- notSingleton2.count:', notSingleton2.count); // => notSingleton2.count: 0










console.log('\n\n\n\n\n');












let anInstance = null; // this would normally be a private variable held in a module

class ASingleton {
    constructor() {
        if (anInstance) {
            return anInstance;
        }

        this.count = 0;
        anInstance = this;
    }

    increment() {
        this.count++;
    }
}



const singleton1 = new ASingleton();
const singleton2 = new ASingleton();

console.log('Before incrementing:')
console.log('- singleton1.count:', singleton1.count); // => singleton1.count: 0
console.log('- singleton2.count:', singleton2.count); // => singleton2.count: 0
console.log('\n');

singleton1.increment();

console.log('After incrementing:')
console.log('- singleton1.count:', singleton1.count); // => singleton1.count: 1
console.log('- singleton2.count:', singleton2.count); // => singleton2.count: 1

