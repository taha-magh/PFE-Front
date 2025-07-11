import * as tslib_1 from "tslib";
// Angular
import { Directive, ElementRef, Input } from '@angular/core';
// Chart
import { Chart } from 'chart.js/dist/Chart.min.js';
// LayoutConfig
import { LayoutConfigService } from '../../layout/services/layout-config.service';
/**
 * Configure sparkline chart
 */
var SparklineChartDirective = /** @class */ (function () {
    /**
     * Directive Constructor
     *
     * @param el: ElementRef
     * @param layoutConfigService: LayoutConfigService
     */
    function SparklineChartDirective(el, layoutConfigService) {
        this.el = el;
        this.layoutConfigService = layoutConfigService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    SparklineChartDirective.prototype.ngAfterViewInit = function () {
        this.initChart(this.el.nativeElement, this.options.data, this.options.color, this.options.border, this.options.fill, this.options.tooltip);
    };
    /**
     * Init chart
     * @param src: any
     * @param data: any
     * @param color: any
     * @param border: any
     * @param fill: any
     * @param tooltip: any
     */
    SparklineChartDirective.prototype.initChart = function (src, data, color, border, fill, tooltip) {
        if (src.length === 0) {
            return;
        }
        // set default values
        fill = (typeof fill !== 'undefined') ? fill : false;
        tooltip = (typeof tooltip !== 'undefined') ? tooltip : false;
        var config = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
                datasets: [{
                        label: '',
                        borderColor: color,
                        borderWidth: border,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 12,
                        pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                        pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                        pointHoverBackgroundColor: this.layoutConfigService.getConfig('colors.state.danger'),
                        pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),
                        fill: false,
                        data: data,
                    }]
            },
            options: {
                title: {
                    display: false,
                },
                tooltips: {
                    enabled: false,
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                responsive: true,
                maintainAspectRatio: true,
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                            display: false,
                            gridLines: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month'
                            }
                        }],
                    yAxes: [{
                            display: false,
                            gridLines: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                },
                elements: {
                    point: {
                        radius: 4,
                        borderWidth: 12
                    },
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 10,
                        top: 5,
                        bottom: 0
                    }
                }
            }
        };
        this.chart = new Chart(src, config);
    };
    /**
     * Returns the chart
     */
    SparklineChartDirective.prototype.getChart = function () {
        return this.chart;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SparklineChartDirective.prototype, "options", void 0);
    SparklineChartDirective = tslib_1.__decorate([
        Directive({
            selector: '[ktSparklineChart]',
            exportAs: 'ktSparklineChart'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, LayoutConfigService])
    ], SparklineChartDirective);
    return SparklineChartDirective;
}());
export { SparklineChartDirective };
//# sourceMappingURL=sparkline-chart.directive.js.map