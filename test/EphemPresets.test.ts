import { NaturalSatellites } from '../src/EphemPresets';

type FetchResponse = {
  json: () => Promise<unknown>;
};

function createSimulation() {
  return {
    getContext: () => ({
      options: {
        basePath: '',
      },
    }),
  };
}

async function loadSatellites(moons: object[]) {
  (global as typeof globalThis & { fetch?: () => Promise<FetchResponse> })
    .fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(moons),
      }),
    );

  return new NaturalSatellites(createSimulation() as never).load();
}

describe('NaturalSatellites', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    if (originalFetch) {
      global.fetch = originalFetch;
    } else {
      delete (global as Partial<typeof globalThis>).fetch;
    }
  });

  test('converts Laplace elements into the ecliptic frame before building Ephem', async () => {
    const satellites = await loadSatellites([
      {
        Planet: 'Jupiter',
        'Epoch String': '2000 Jan. 1.50 TDB',
        'Epoch JD': 2451544.5,
        'Element Type': 'Laplace',
        'Sat.': 'Io',
        tags: '',
        a: 421800,
        e: '0.0041',
        w: '84.129',
        M: '342.021',
        i: '0.036',
        node: '43.977',
        n: '203.4889538',
        P: '1.762732',
        Pw: '1.333',
        Pnode: '0',
        RA: 268.057,
        Dec: 64.495,
        Tilt: 0,
        Ref: '11',
      },
    ]);
    const moon = satellites.getSatellitesForPlanet('jupiter')[0];

    expect(moon.ephem.get('i', 'deg')).toBeCloseTo(2.2340142881, 6);
    expect(moon.ephem.get('om', 'deg')).toBeCloseTo(338.6729426994, 6);
    expect(moon.ephem.get('w', 'deg')).toBeCloseTo(147.6649113096, 6);
  });

  test('converts equatorial elements into the ecliptic frame before building Ephem', async () => {
    const satellites = await loadSatellites([
      {
        Planet: 'Pluto',
        'Epoch String': '',
        'Epoch JD': 2456293.5,
        'Element Type': 'Equatorial',
        'Sat.': 'Charon',
        tags: '',
        a: 19591,
        e: '0.0002',
        w: '146.106',
        M: '131.07',
        i: '0.08',
        node: '26.928',
        n: '56.362521',
        P: '6.387',
        Pw: '10178.04',
        Pnode: '9020.398',
        RA: 58,
        Dec: null,
        Tilt: null,
        Ref: '',
      },
    ]);
    const moon = satellites.getSatellitesForPlanet('pluto')[0];

    expect(moon.ephem.get('i', 'deg')).toBeCloseTo(112.8719661596, 6);
    expect(moon.ephem.get('om', 'deg')).toBeCloseTo(227.4107188898, 6);
    expect(moon.ephem.get('w', 'deg')).toBeCloseTo(190.1700615697, 6);
  });
});
