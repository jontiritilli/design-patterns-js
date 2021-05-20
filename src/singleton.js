/**
 * An example of how classes normally work
 * 
 * Everytime 'new' is called, a new object is created.
 * In this case each object has its own "count" property.
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













/**
 * A Singleton
 * If a singleton has already been instantiated, then it returns itself.
 * This means there can only ever be 1 instance. All references to this
 * instance share the same "count" property.
 * 
 * The variable "anInstance" is made private with an IIFE. If we were using a
 * module system like ES6 or CommonJS modules, then we wouldn't need to use
 * an IIFE.
 */
const ASingleton = (function() {
    let anInstance = null; // should be a private variable held in a module
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

    return ASingleton;
})()

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

