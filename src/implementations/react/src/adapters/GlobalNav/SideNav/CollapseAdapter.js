import React from 'react';
import * as HIG from 'hig-vanilla';
import HIGAdapter, {
  MapsEventListener,
  MapsPropToMethod,
  MountedByHIGParent
} from '../../HIGAdapter';

function ModuleAdapter(props) {
  return (
    <HIGAdapter name="Collapse" HIGConstructor={HIG.GlobalNav._partials.SideNav._partials.Group._partials.Module._partials.Collapse} {...props}>{(adapterProps) => (
      <div>
        <MapsEventListener listener="onClick" handler={props.onClick} {...adapterProps} />
        <MapsPropToMethod value={props.minimized} {...adapterProps}>
          {(instance, value) => value ? instance.minimize() : instance.maximize()}
        </MapsPropToMethod>
        <MapsPropToMethod value={props.hidden} {...adapterProps}>
          {(instance, value) => value ? instance.hide() : instance.show()}
        </MapsPropToMethod>
        <MountedByHIGParent mounter="addCollapse" {...adapterProps} />
      </div>
    )}</HIGAdapter>
  );
}

export default ModuleAdapter;