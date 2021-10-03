import { Component, OnInit } from '@angular/core';
import { resourceList } from '@/utils/resource-list';
import { buildingList } from '@/utils/building-list';
import { buildingsFormulas } from '@/utils/formulas/buildings.formulas';
import { Resource } from '@/utils/enums/resource.enum';
import { interval, Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';

interface Planet {
  id: string;
  name: string;
}

type ResourcesAmount = {
  [key in Resource]: number;
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  planets: Planet[] = [
    {
      id: '34179541-8959-4d2c-9b18-0390ba6b8862',
      name: 'Homeworld',
    },
  ];

  currentPlanet: Planet = this.planets[0];
  resources = resourceList;
  initialResourcesAmount: ResourcesAmount = {
    [Resource.METAL]: 3000,
    [Resource.CRYSTAL]: 1800,
    [Resource.DEUTERIUM]: 0,
  };

  resourcesAmountObservable?: Observable<ResourcesAmount>;

  public calculateProduction(resource: Resource): number {
    return buildingList
      .map((building) => buildingsFormulas[building])
      .filter((formula) => formula.isProducing(resource))
      .map((formula) => formula.production(0))
      .reduce((prev, current) => prev + current);
  }

  public displayResourceAmount(value: number): number {
    return Math.floor(value);
  }

  ngOnInit(): void {
    this.resourcesAmountObservable = interval(1000)
      .pipe(map(() => this.initialResourcesAmount))
      .pipe(
        scan(
          (acc) =>
            resourceList
              .map<Partial<ResourcesAmount>>((resource) => ({
                [resource]:
                  this.calculateProduction(resource) / 3600 + acc[resource],
              }))
              .reduce((prev, current) => ({
                ...prev,
                ...current,
              })) as ResourcesAmount
        )
      );
  }
}
