import {describe, it/*, before, after*/} from 'mocha';
import * as chai from 'chai';
import * as path from 'path';
// import * as rewiremock from 'rewiremock';

const miqroCorePath = "@miqro/core";

describe('Zexample start', function() {
  this.timeout(100000);
  /*before((done) => {
    rewiremock.default.disable();
    rewiremock.default.enable();
    rewiremock.default.disable();
    rewiremock.default.enable();
    const miqroCore = require(miqroCorePath);
    const miqroExpress = require("@miqro/handlers");
    rewiremock.default("@miqro/core").with(miqroCore);
    rewiremock.default("@miqro/handlers").with(miqroExpress);
    done();
  });
  after((done) => {
    rewiremock.default.disable();
    done();
  });*/
  it('start the example in simple mode', (done) => {
    const test = async () => {
      const lib = require('../src/miqro');
      process.env.MIQRO_DIRNAME = path.resolve(__dirname, '..', 'example');
      const micro = new lib.Miqro({
        name: "Micro 1",
        service: path.resolve(__dirname, '..', 'example', 'service'),
        nodes: 1,
        mode: "simple"
      });
      await micro.start();
      await micro.stop();
      delete process.env.MIQRO_DIRNAME;
    };
    test().then(done).catch(done);
  });

  it('start the example in unsupported mode', (done) => {
    const test = async () => {
      try {
        const lib = require('../src/miqro');
        const micro = new lib.Miqro({
          name: "Micro 1",
          service: path.resolve(__dirname, '..', 'example', 'service'),
          nodes: 1,
          mode: "unsoported" as any
        });
        chai.expect(true).to.be.equals(false);
      } catch (e) {
        chai.expect(e.message).to.be.equals(`mode unsoported not supported!`);
      }
    };
    test().then(done).catch(done);
  });
});
