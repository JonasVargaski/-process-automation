import Automation from '../entities/Automation';

class AutomationRepository {
  private automations: Array<Automation>;

  constructor() {
    this.automations = [];
  }

  public list(): Array<Automation> {
    return this.automations;
  }

  public create(type: number, description: string): Automation {
    const automation = new Automation(type, description);
    this.automations.push(automation);
    return automation;
  }
}

export default AutomationRepository;