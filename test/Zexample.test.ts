import {describe, it} from 'mocha';
import * as chai from 'chai';
import * as path from 'path';
import {Util} from "@miqro/core";
// import * as rewiremock from 'rewiremock';

process.env.NODE_ENV = "test";

const miqroCorePath = "@miqro/core";

describe('Zexample start', function () {
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
      const result = await Util.request({url: "http://localhost:8080/hello", method: "get"});
      chai.expect(result.status).to.be.equals(200);
      chai.expect(result.data.result).to.be.equals("world");
      await Util.request({url: "http://localhost:8080/hello", method: "get"});
      await Util.request({url: "http://localhost:8080/hello", method: "get"});
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
